# Image Optimization Workflow

For a high-performance website, especially one with a static export, it's crucial to manually optimize all images before adding them to the `/public` directory.

## Steps

1.  **Resize Images**: Resize images to the maximum dimensions they will be displayed at. For example, a full-width hero image might be `1920px` wide, while a card image might only be `400px` wide.

2.  **Compress Images**: Use an image compression tool to reduce the file size without significant loss in quality. Tools like [Squoosh](https://squoosh.app/) or [ImageOptim](https://imageoptim.com/mac) are excellent for this.

3.  **Use Modern Formats**: Convert images to modern formats like WebP or AVIF, which offer better compression than JPEG or PNG. You can use Squoosh for this or command-line tools like `cwebp`.

## Example using `cwebp`

```bash
# Convert a PNG to WebP with 80% quality
cwebp -q 80 input.png -o output.webp
```

## TODO

- [ ] Add a `hero.jpg` to `/public/images`.
- [ ] Add a `logo.svg` to `/public/images`.
- [ ] Add product images to `/public/images/products/`.
- [ ] Create an Open Graph image (`og-image.jpg`) and add it to `/public/images`.
- [ ] Create a `favicon.ico` and add it to `/public`.
