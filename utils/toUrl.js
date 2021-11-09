import imageBuilder from "./sanity-img-builder";

const toUrl = (source) => imageBuilder.image(source).url();

export default toUrl;
