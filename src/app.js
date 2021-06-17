require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./routes/user');
const follower = require('./routes/follower');
const tweet = require('./routes/tweet');
const explore = require('./routes/explore');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/user', user);
app.use('/follow', follower);
app.use('/tweet', tweet);
app.use('/feed', feed);
app.use('/explore', explore);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
