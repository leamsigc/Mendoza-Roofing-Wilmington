
export default defineNuxtRouteMiddleware(async (to) => {
    const routeStart = to.path
    const isBlog = routeStart.startsWith('/blogs/');
    const isTools = routeStart.includes('/tools');

    let layout = 'default';
    if (isBlog) {
        layout = 'blog-layout';
    } else if (isTools) {
        layout = 'tools-layout';
    } else {
        layout = 'default';
    }

    setPageLayout(layout as any,);
});