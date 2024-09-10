import requests
from bs4 import BeautifulSoup
from PIL import Image
from io import BytesIO
import re

def fetch_image_urls(query, num_images=5):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    }
    search_url = f"https://www.google.com/search?hl=en&tbm=isch&q={query}"
    response = requests.get(search_url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    image_urls = []
    img_tags = soup.find_all("img")
    
    for img in img_tags:
        img_url = img.get("src")
        if img_url and img_url.startswith("http"):
            image_urls.append(img_url)
        if len(image_urls) >= num_images:
            break
    
    return image_urls

def is_white_background(image_url):
    try:
        response = requests.get(image_url)
        img = Image.open(BytesIO(response.content))
        img = img.convert("RGB")
        width, height = img.size
        white_pixel_count = 0
        total_pixel_count = width * height

        for x in range(0, width, width // 10):  # Check a sample of pixels
            for y in range(0, height, height // 10):
                r, g, b = img.getpixel((x, y))
                if r > 200 and g > 200 and b > 200:
                    white_pixel_count += 1
        
        return (white_pixel_count / total_pixel_count) > 0.9
    except Exception as e:
        print(f"Error checking image background: {e}")
        return False

def main():
    query = "your product here"
    image_urls = fetch_image_urls(query)
    high_quality_images = []
    
    for url in image_urls:
        if is_white_background(url):
            high_quality_images.append(url)
        if len(high_quality_images) >= 5:
            break
    
    for idx, img_url in enumerate(high_quality_images):
        print(f"Image {idx + 1}: {img_url}")

if __name__ == "__main__":
    main()
