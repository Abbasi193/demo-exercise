import mongoose from 'mongoose'

const DataSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique:true
    },
    sheet: {
        type: Object,
        required: true

    }
});

const Data = mongoose.model('Data', DataSchema)

export default Data
