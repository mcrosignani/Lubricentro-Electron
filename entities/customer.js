var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required:true },
    cellPhone: { type: String },
    phone: { type: String },
    address: { type: String },
    cars: [{
        custId: { type: mongoose.Schema.Types.ObjectId, require: true },
        brand: { type: String, require: true },
        model: { type: String, require: true },
        registrationNumber: { type: String, require: true },
        colour: { type: String },
        remarks: { type: String }
    }]
});

var Customer = mongoose.model('customer', customerSchema);