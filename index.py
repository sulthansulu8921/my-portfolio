import requests

# Fetch data from API
url = "https://fakestoreapi.com/products?limit=5"
response = requests.get(url)
products = response.json()

# Sort products by rating (descending order)
sorted_products = sorted(products, key=lambda p: p["rating"]["rate"], reverse=True)

# Print sorted products
for p in sorted_products:
    print(f"Title: {p['title']}")
    print(f"Rating: {p['rating']['rate']} (Count: {p['rating']['count']})")
    print("-" * 40)
