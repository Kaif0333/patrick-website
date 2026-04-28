from PIL import Image
import random

img = Image.open(r'public\pharma-access-cover.png')
w, h = img.size
pixels = img.load()

# The Gemini sparkle icon is roughly in the region x:920-1008, y:985-1068 (bottom-right)
# We need to find all non-background pixels in that area and replace them with background

# First, collect background color samples from a safe area nearby (further left, same height)
bg_samples = []
for y in range(h - 40, h):
    for x in range(w - 200, w - 150):
        bg_samples.append(pixels[x, y])

# Define the region to clean (the icon area with some margin)
clean_x_start = 920
clean_y_start = 985
clean_x_end = w
clean_y_end = h

# For each pixel in the region, check if it's part of the icon (brighter than background)
# and replace with a sampled background pixel for natural look
for y in range(clean_y_start, clean_y_end):
    for x in range(clean_x_start, clean_x_end):
        r, g, b, a = pixels[x, y]
        # The icon pixels are significantly brighter (gray ~130+) than the dark blue bg (~6,30,64)
        # Use brightness threshold to detect icon pixels
        brightness = (r + g + b) / 3
        if brightness > 40:  # Icon pixels are much brighter than background
            # Replace with a nearby background pixel for natural variation
            # Sample from the same row, further left
            source_x = x - 150
            if source_x < 0:
                source_x = 50
            source_y = y
            pixels[x, y] = pixels[source_x, source_y]

img.save(r'public\pharma-access-cover.png')
print("Done! Watermark removed.")
