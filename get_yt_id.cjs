const https = require('https');

// Get channel page source to find channel ID
https.get('https://www.youtube.com/@patrickrcoyle', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find channel ID in page source
    const channelMatch = data.match(/\"channelId\":\"([^\"]+)\"/);
    const externalMatch = data.match(/\"externalId\":\"([^\"]+)\"/);
    const browseMatch = data.match(/\"browseId\":\"([^\"]+)\"/);
    
    console.log('channelId:', channelMatch ? channelMatch[1] : 'not found');
    console.log('externalId:', externalMatch ? externalMatch[1] : 'not found');
    console.log('browseId:', browseMatch ? browseMatch[1] : 'not found');
    
    // Also find any video IDs
    const videoIds = [...new Set([...data.matchAll(/\"videoId\":\"([^\"]+)\"/g)].map(m => m[1]))];
    console.log('Recent video IDs:', videoIds.slice(0, 6));
  });
});
