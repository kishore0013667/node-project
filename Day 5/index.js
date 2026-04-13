
export const movieCreate = (req, res) => {
const { id, movieName, movieCat, hero, herion } = req.body;

try {
    const datas = [];

    const obj = { id, movieName, movieCat, hero, herion };

    datas.push(obj);

    // Find movie by id (example: 1003)
    const datanew = datas.find((e) => e.id == 1003);

    console.log("filter:", datanew);

    if (datanew) {
    res.status(200).json({
        msg: "Successfully Added",
        sendData: datanew.movieName,
    });
    } else {
    res.status(404).json({
        msg: "Movie not found with id 1003",
    });
    }
}
catch (error) {
    console.log("Error:", error);
    res.status(500).json({
    msg: "Something went wrong",
    });
}
};



// GET BY PARAMS ( /movie/:id )
export const moviegetbyParams = (req, res) => {
try {
    const { id } = req.params;

    console.log("Params:", req.params);

    // dummy data
    const datas = [
    { id: 1001, movieName: "Leo" },
    { id: 1002, movieName: "Jailer" },
    { id: 1003, movieName: "Vikram" },
    ];

    const result = datas.find((e) => e.id == id);

    if (result) {
    res.status(200).json({
        msg: "Movie found",
        data: result,
    });
    } else {
    res.status(404).json({
        msg: "Movie not found",
    });
    }
} 
catch (error) {
    res.status(500).json({
    msg: "Error fetching movie",
    });
}
};



// FILTER USING QUERY ( /movie?movieCat=action )
export const movieFilter = (req, res) => {
try {
    const { movieCat } = req.query;

    console.log("Query:", req.query);

    const datas = [
    { id: 1, movieName: "Leo", movieCat: "action" },
    { id: 2, movieName: "Love Today", movieCat: "romance" },
    { id: 3, movieName: "Vikram", movieCat: "action" },
    ];

    const filtered = datas.filter((e) => e.movieCat === movieCat);

    res.status(200).json({
    msg: "Filtered movies",
    data: filtered,
    });
} 
catch (error) {
    res.status(500).json({
    msg: "Error filtering movies",
    });
}
};



// TOKEN FROM HEADERS
export const movieToken = (req, res) => {
try {
    const token = req.headers.authorization;

    console.log("Token:", token);

    if (!token) {
    return res.status(401).json({
        msg: "No token provided",
    });
    }

    res.status(200).json({
    msg: "Token received",
    token: token,
    });
} 
catch (error) {
    res.status(500).json({
    msg: "Error reading token",
    });
}
};