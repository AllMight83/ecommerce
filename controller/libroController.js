const Libro = require('../model/Libro');


class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

}
    


const libroController = {
    mostrar: async (req, res) => {
        try {
            const features = new APIfeatures(Libro.find(), req.query).filtering()

            const libros = await features.query


            res.json(libros)    

        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }

}

// const libroController = {
//     mostrar: async (req, res) => {
//         try {
//             const srch = {$text: {$search: req.query.title}};
//             console.log(srch)
//             const features = new APIfeatures(Libro.find({$text: {$search: ''}}), req.query).filtering()

//             const libros = await features.query


//             res.json(libros)    

//         } catch (error) {
//             return res.status(500).json({msg: error.message})
//         }
//     }

// }

// const libroController = {
//     mostrar: async (req, res) => {
//         try {
//             const libros = await Libro.find()


//             res.json(libros)    

//         } catch (error) {
//             return res.status(500).json({msg: error.message})
//         }
//     }

// }








module.exports = libroController