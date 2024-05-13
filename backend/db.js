const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://parushramverma:IyzvLmFoprJqcwp3@cluster0.wvvjtyz.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        
        const sampleCollection = mongoose.connection.db.collection("sample");
        const foodCategoryCollection = mongoose.connection.db.collection("sample1");
        
        try {
            const sampleData = await sampleCollection.find({}).toArray();
            const foodCategoryData = await foodCategoryCollection.find({}).toArray();
            
            global.sample = sampleData;
            global.sample1 = foodCategoryData;
            // console.log(global.sample)
        } catch (findError) {
            console.error("Error during find operation:", findError);
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
