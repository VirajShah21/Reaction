function joinClassNames(...classNames: unknown[]) {
    return classNames.filter(c => typeof c === 'string' && c !== '').join(' ');
}

export { joinClassNames };
