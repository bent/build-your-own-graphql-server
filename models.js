const Sequelize = require("sequelize")

const db = new Sequelize('learned-optimism', null, null, {
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const AdversityModel = db.define('adversity', {
  description: { type: Sequelize.STRING }
});

const BeliefModel = db.define('belief', {
  description: { type: Sequelize.STRING }
});

AdversityModel.hasMany(BeliefModel);
BeliefModel.belongsTo(AdversityModel);

const EvidenceModel = db.define('evidence', {
  description: { type: Sequelize.STRING }
})

BeliefModel.hasMany(EvidenceModel)
EvidenceModel.belongsTo(BeliefModel)

const AlternativeModel = db.define('alternative', {
  description: { type: Sequelize.STRING }
})

BeliefModel.hasMany(AlternativeModel)
AlternativeModel.belongsTo(BeliefModel)

const ImplicationModel = db.define('implication', {
  description: { type: Sequelize.STRING }
})

BeliefModel.hasMany(ImplicationModel)
ImplicationModel.belongsTo(BeliefModel)

Promise.all([
  AdversityModel.create({description: "I lost my cat"}).then(adversity => Promise.all([
    adversity.createBelief({description: "He's been hit by a car"}).then(belief => Promise.all([
      belief.createEvidence({description: "He was last seen on the nature strip"}), 
      belief.createEvidence({description: "There are skid marks on the road"}),
      belief.createAlternative({description: "He just needed some time-out for himself"}),
      belief.createAlternative({description: "He's gone to live with the little old lady up the road"}),
      belief.createImplication({description: "I'll be sad"}),
      belief.createImplication({description: "I'll get a new cat, he was actually bit of a tyrant"})
    ])),
    adversity.createBelief({
      description: "He's abandoned me for the little old lady up the road"
    })
  ])),
  AdversityModel.create({description: "They changed the recipe for Barbeque Shapes"})
])

const Adversity = db.models.adversity;
const Belief = db.models.belief;
const Evidence = db.models.evidence;
const Alternative = db.models.alternative;
const Implication = db.models.implication;

module.exports = { Adversity, Belief, Evidence, Alternative, Implication };