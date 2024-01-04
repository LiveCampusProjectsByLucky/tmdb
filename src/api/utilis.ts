import { ConfigurationI } from "../types/configuration/ConfigurationI";

export async function fetchData<D>(url: string, params: {}): Promise<D> {
    return await fetch(url + new URLSearchParams(params))
        .then((response) => response.json())
        .then((data) => {return data as D})
        .catch((error) => error);
};


export async function getImages(api_key: string, imgPath:string, imgSize?: string) {
    const configUrl = "https://api.themoviedb.org/3/configuration?";
    const configRes = await fetchData<ConfigurationI>(configUrl, {api_key});
    if (configRes) {
        const { images } = configRes;
        const { secure_base_url, poster_sizes } = images;
        const imgSizeToUse = imgSize ? imgSize : poster_sizes[3];
        return secure_base_url + imgSizeToUse + imgPath;
    }
}