



export const validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate({...req.body , ...req.params , ...req.query })
        if (!error) {
            next()
        } else {
            return res.json({ msg: "validation Error", error: error?.details })

        }
    }
}