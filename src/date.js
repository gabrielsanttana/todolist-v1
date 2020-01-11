module.exports.getStringDate = () => {
    const date = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    const currentDay = date.toLocaleDateString("en-US", options);

    return currentDay;
}