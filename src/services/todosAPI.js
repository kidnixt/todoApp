const getTodos = async () => {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const { status }  = response;
        if (status === 200) {
            const data = await response.json();
            return data;
        }else{
            return Promise.reject({
                message: "Something went wrong!",
                code : status,
            });
        }
    } catch (error) {
        return Promise.reject(error);
    }

};

export default getTodos;
