export const formatDate = (date: Date | string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("fr-FR", {day: "numeric", month: "long"});
}

export const formatTime = (date: Date | string) => {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"}).replace(":", "h");
}

export const formatFullDate = (date: Date | string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("fr-FR", {day: "numeric", month: "long", year: "numeric"});
}