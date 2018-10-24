var mongoose = require('mongoose');

var workSchema = new mongoose.Schema({
    custId: { type: mongoose.Schema.Types.ObjectId, required: true },
    totalAmount: { type: Number },
    invoice: { type: String },
    date: { type: Date },
    details: [{
        workId: { type: mongoose.Schema.Types.ObjectId, require: true },
        Description: { type: String, require: true },
        suppliesAmount: { type: Number },
        quantity: { type: Number },
        laborAmount: { type: Number }
    }]
});

var Work = mongoose.model('work', workSchema);