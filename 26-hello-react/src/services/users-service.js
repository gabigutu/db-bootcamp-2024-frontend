import { PLACEHOLDER_URL_BASE, PLACEHOLDER_PATHS } from "./fetch-setup";

export default async function fetchUser(id) {
    if (id === undefined) return;
    console.log(`Fetching details for user ${id}`);
    const response = await fetch(PLACEHOLDER_URL_BASE + PLACEHOLDER_PATHS['users'] + '/' + id);
    const user = await response.json();
    console.log(user);
    return user;
}
