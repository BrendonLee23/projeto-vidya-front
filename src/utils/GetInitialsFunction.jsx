export function getInitials(fullName) {
    const words = fullName.split(' ');
    const firstTwoWords = words.length > 1 ? words.slice(0, 2) : words.slice(0, 1);
    const initials = firstTwoWords.map(word => word.charAt(0).toUpperCase());
    return initials.join('');
}