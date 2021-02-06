const express = require('express');
const router = express.Router();

const signUp = require('./routes/signup');
const signIn = require('./routes/signin');
const logout = require('./routes/logout');
const save = require('./routes/save');
const test = require('./routes/test');
const deleteSong = require('./routes/deletesong');
const songList = require('./routes/songlist');
const open = require('./routes/open');
const update = require('./routes/update');
const rename = require('./routes/rename');
const auth = require('../middleware/auth');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/save', auth, save);

router.post('/test', test);

router.get('/logout', logout);
router.get('/songlist', auth, songList);
router.get('/open', auth, open);

router.delete('/deletesong', auth, deleteSong);

router.put('/update', auth, update);
router.patch('/rename', auth, rename);

module.exports = router;
