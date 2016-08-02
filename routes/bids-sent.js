var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Tenders(){
  return knex('tenders');
};

router.get('/', function(req, res, next) {
  Tenders().select().then(function(tenders){
    res.render('bidder/index', { tenders:tenders,
      message:'When user clicks accept offer on biddee show page, user is directed to meetup form'

    });
  })
})

router.get('/:id', function(req, res, next) {
  res.render('bidder/show', {
    title: "Lets Meet Up!"
  })
});

module.exports = router;
