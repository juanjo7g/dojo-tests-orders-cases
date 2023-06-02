export const handler = async(event) => {
    // TODO implement
    console.log("Github action demo")
    const response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };
    return response;
};