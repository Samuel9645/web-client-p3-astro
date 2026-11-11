import type {ImageMetadata} from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/*.{png,jpg,jpeg,webp}',
    {eager: true});
export const getImagePath = (speciesId: string) => {
    const extension = speciesId === "lagarto-gomera" ? "jpg" : "png";
    const path = `/src/assets/${speciesId}.${extension}`;
    const image = images[path]?.default;
    if (!image) {
        throw new Error(`Image not found for species ID: ${speciesId}`);
    }
    return image;
};