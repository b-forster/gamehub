const getCroppedImgUrl = (url: string) => {
    // Finds 'media/' part of image url and inserts 'crop/600/400' afterwards
    if (!url) return '';
    const insertAfterString = 'media/';
    const insertUrlFragment = 'crop/600/400/';

    const insertIndex = url.indexOf(insertAfterString) + insertAfterString.length;
    return url.slice(0, insertIndex) + insertUrlFragment + url.slice(insertIndex);
}

export default getCroppedImgUrl;