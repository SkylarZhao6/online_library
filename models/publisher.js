let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PublisherSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 10, maxlength: 60 }
    }
);

// Virtual for publisher's URL
PublisherSchema
    .virtual('url')
    .get(function () {
        // endpoint??
        return '/catalog/publisher/' + this._id;
    });

//Export model
module.exports = mongoose.model('Publisher', PublisherSchema);
