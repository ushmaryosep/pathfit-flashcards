
import { useState } from "react";
import "./index.css";

const decks = {
  skeletal: {
    title: "Skeletal System",
    subtitle: "Bones, joints, body planes, and movement",
    icon: "🦴",
    cards: [
      { q: "What are the main functions of the skeletal system?", a: "Support, protection, movement, and blood cell production." },
      { q: "How does the skeleton support the body?", a: "It gives the body shape and helps maintain an upright posture." },
      { q: "How does the skeleton protect the body?", a: "The skull protects the brain, the vertebral column protects the spinal cord, and the rib cage protects the heart and lungs." },
      { q: "How do bones help the body move?", a: "Muscles contract and pull on bones, producing movement at joints." },
      { q: "Where are blood cells produced?", a: "In bone marrow. Important locations in adults include the spine, hips, ribs, and breastbone." },
      { q: "How many bones make up the adult skull?", a: "22 bones, fused together except for the mandible." },
      { q: "How many bones make up the adult spine according to the reviewer?", a: "26 bones: 24 vertebrae, the sacrum, and the coccyx." },
      { q: "What are the five bone shape classifications?", a: "Long, short, flat, irregular, and sesamoid bones." },
      { q: "What are long bones?", a: "Cylindrical bones found in the arms, legs, fingers, and toes. They act as levers and support weight." },
      { q: "What are short bones?", a: "Cube-like bones, such as carpals and tarsals, that provide stability and support with limited motion." },
      { q: "What are flat bones?", a: "Thin, often curved bones such as cranial bones, scapulae, sternum, and ribs. They protect organs and provide muscle attachment." },
      { q: "What are irregular bones?", a: "Bones with complex shapes, such as vertebrae and some facial bones." },
      { q: "What are sesamoid bones?", a: "Small, round, sesame-seed-shaped bones embedded in tendons. The patella is an example." },
      { q: "What is a joint?", a: "An articulation or connection between bones." },
      { q: "What are the three functional joint classifications in the reviewer?", a: "Immovable, slightly movable, and freely movable." },
      { q: "What is articular cartilage?", a: "Cartilage covering the surfaces of bones where they meet at a joint." },
      { q: "What does synovial fluid do?", a: "It lubricates a synovial joint and helps reduce friction during movement." },
      { q: "What is the synovial membrane?", a: "The membrane lining the inside of a synovial joint capsule that produces synovial fluid." },
      { q: "What is the articular capsule?", a: "The capsule enclosing a synovial joint." },
      { q: "What are the three body planes?", a: "Sagittal, frontal, and transverse planes." },
      { q: "What is the sagittal plane?", a: "A plane that divides the body into left and right portions." },
      { q: "What is the frontal plane?", a: "A plane that divides the body into front and back portions." },
      { q: "What is the transverse plane?", a: "A plane that divides the body into upper and lower portions." },
      { q: "What is flexion?", a: "A bending movement that decreases the angle between body parts." },
      { q: "What is extension?", a: "A movement that increases the angle between body parts or straightens a joint." },
      { q: "What is hyperextension?", a: "Extension beyond the anatomical position or normal range of extension." },
      { q: "What are abduction and adduction?", a: "Abduction moves a body part away from the body's midline; adduction moves it toward the midline." },
      { q: "What is lateral flexion?", a: "Bending the neck or trunk sideways." },
      { q: "What are horizontal flexion and horizontal extension?", a: "Horizontal flexion moves a limb horizontally toward the front or across the body; horizontal extension moves it away." },
      { q: "What are dorsiflexion and plantar flexion?", a: "Dorsiflexion brings the top of the foot toward the shin. Plantar flexion points the foot downward." },
      { q: "What are pronation and supination?", a: "Pronation turns the forearm so the palm faces downward or backward; supination turns it upward or forward." },
      { q: "What are inversion and eversion?", a: "Inversion turns the sole of the foot inward; eversion turns it outward." },
      { q: "What is rotation?", a: "Turning a body part around its axis." },
      { q: "What is circumduction?", a: "A circular movement combining flexion, extension, abduction, and adduction." },
      { q: "What are elevation and depression?", a: "Elevation moves a body part upward; depression moves it downward." },
      { q: "What are protraction and retraction?", a: "Protraction moves a body part forward; retraction moves it backward." },
      { q: "Name the major bones of the upper arm and forearm.", a: "The humerus is in the upper arm. The radius and ulna are in the forearm." },
      { q: "Name the major bones of the lower leg.", a: "The tibia and fibula." },
      { q: "What are the carpals, metacarpals, and phalanges?", a: "Carpals are wrist bones, metacarpals are palm bones, and phalanges are finger bones." },
      { q: "What are the tarsals and metatarsals?", a: "Tarsals are ankle/foot bones near the ankle; metatarsals form the middle of the foot." },
      { q: "Name the main bones of the pelvis shown in the reviewer.", a: "Ilium, pubis, sacrum, and coccyx." }
    ]
  },
  muscular: {
    title: "Muscular System",
    subtitle: "Muscle types, major muscles, and contractions",
    icon: "💪",
    cards: [
      { q: "What causes body movement in the muscular system?", a: "Muscles shorten (contract) and lengthen (extend)." },
      { q: "What are the main functions of the muscular system?", a: "Move body parts, give the body individual shape, protect and hold abdominal organs in place, maintain posture, help circulation, and generate heat." },
      { q: "What are the three types of muscle tissue?", a: "Smooth, cardiac, and skeletal muscle." },
      { q: "What is smooth muscle?", a: "Involuntary muscle found in organs such as the stomach, gut, and bladder." },
      { q: "What is cardiac muscle?", a: "Involuntary muscle found only in the heart. It works regularly and continuously and is controlled automatically by nervous and chemical processes." },
      { q: "What is skeletal muscle?", a: "Muscle controlled voluntarily and used for everyday movements and sports." },
      { q: "What does the deltoid do?", a: "Helps move the arm in different directions at the shoulder." },
      { q: "What do the triceps do?", a: "Help extend the elbow and contribute to arm and shoulder movement." },
      { q: "What do the hamstrings do?", a: "Flex the knee and extend the hip." },
      { q: "What does the trapezius do?", a: "Controls movement of the shoulder girdle." },
      { q: "What does the latissimus dorsi do?", a: "Performs shoulder adduction." },
      { q: "What do the gluteals, especially gluteus maximus, do?", a: "Help extend the hip." },
      { q: "What does the biceps muscle do?", a: "Flexes the elbow and forearm." },
      { q: "What do the abdominal muscles do?", a: "Rotate and raise the trunk, strengthen the abdominal wall, and help with breathing." },
      { q: "What does the pectoralis major do?", a: "Performs shoulder adduction and is used during deep breathing." },
      { q: "What do the quadriceps do according to the reviewer?", a: "The reviewer lists extending the knee and flexing the knee joints." },
      { q: "What does the gastrocnemius do?", a: "Performs plantar flexion of the foot." },
      { q: "Name the major muscle groups on the front of the body in the reviewer.", a: "Trapezius, deltoids, pectoral group, biceps brachii, abdominal muscles, forearms, quadriceps, and gastrocnemius." },
      { q: "Name the major muscle groups on the back of the body in the reviewer.", a: "Trapezius, deltoids, latissimus dorsi, triceps brachii, forearm, lower back, gluteal group, hamstrings, and gastrocnemius." },
      { q: "What is an isometric or static contraction?", a: "Muscle tension without a change in overall muscle length, such as holding a dumbbell still during a curl." },
      { q: "What is a concentric contraction?", a: "A muscle shortens while under tension, such as raising a dumbbell during a curl." },
      { q: "What is an eccentric contraction?", a: "A muscle produces tension while lengthening, such as lowering a dumbbell during a curl." },
      { q: "What happens to blood flow during exercise?", a: "Blood flow increases, helping deliver more oxygen to working muscles." },
      { q: "What energy stores are used during muscle activity according to the reviewer?", a: "ATP, creatine phosphate, and muscle glucose stores." },
      { q: "What waste products can build up during exercise according to the reviewer?", a: "Carbon dioxide and lactic acid." },
      { q: "What can happen when muscles are overused?", a: "Muscle soreness and strains may occur." },
      { q: "What is an agonist muscle?", a: "The mover whose contraction contributes to the desired movement. The biceps is an example during elbow flexion." },
      { q: "What is an antagonist muscle?", a: "A muscle that performs the opposite action to the agonist and must relax to allow the movement. The biceps is an antagonist during triceps extension." },
      { q: "What is a stabilizer muscle?", a: "A muscle that holds a body segment or part steady while another part moves." },
      { q: "What is a neutralizer muscle?", a: "A muscle that equalizes or cancels one or more actions of another muscle." },
      { q: "Which muscle group is at the front of the upper arm?", a: "The biceps brachii." },
      { q: "Which muscle group is at the back of the upper arm?", a: "The triceps brachii." },
      { q: "Which muscle group is located at the front of the thigh?", a: "The quadriceps." },
      { q: "Which muscle group is located at the back of the thigh?", a: "The hamstrings." },
      { q: "Which muscle is located at the back of the lower leg and helps point the foot downward?", a: "The gastrocnemius." }
    ]
  }
};

export default function App() {
  const [section, setSection] = useState("skeletal");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [known, setKnown] = useState({});
  const [shuffled, setShuffled] = useState(false);

  const deck = decks[section];
  const cards = deck.cards;
  const card = cards[index];
  const key = `${section}-${index}`;
  const knownCount = cards.filter((_, i) => known[`${section}-${i}`]).length;
  const progress = Math.round(((index + 1) / cards.length) * 100);

  function changeSection(next) {
    setSection(next);
    setIndex(0);
    setRevealed(false);
    setShuffled(false);
  }

  function move(amount) {
    setIndex((current) => (current + amount + cards.length) % cards.length);
    setRevealed(false);
  }

  function markKnown() {
    setKnown((previous) => ({ ...previous, [key]: !previous[key] }));
    move(1);
  }

  function shuffleDeck() {
    setIndex(Math.floor(Math.random() * cards.length));
    setRevealed(false);
    setShuffled(true);
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" onClick={() => changeSection("skeletal")}>
          <span className="brand-icon">P</span>
          <span>PATHFIT<span className="brand-light"> REVIEWER</span></span>
        </a>
        <span className="top-label">STUDY MODE</span>
      </header>

      <section className="hero">
        <div className="eyebrow"><span className="status-dot" /> YOUR PATHFIT STUDY SPACE</div>
        <h1>Learn it.<br /><span>Remember it.</span></h1>
        <p>Review the Skeletal and Muscular Systems one flashcard at a time.</p>
      </section>

      <section className="deck-switcher" aria-label="Choose a study section">
        {Object.entries(decks).map(([id, item]) => (
          <button
            key={id}
            className={`deck-option ${section === id ? "selected" : ""}`}
            onClick={() => changeSection(id)}
          >
            <span className="deck-emoji">{item.icon}</span>
            <span className="deck-copy">
              <strong>{item.title}</strong>
              <small>{item.cards.length} flashcards</small>
            </span>
            {section === id && <span className="selected-check">✓</span>}
          </button>
        ))}
      </section>

      <section className="study-area">
        <div className="study-heading">
          <div>
            <div className="eyebrow">CURRENT DECK</div>
            <h2>{deck.title}</h2>
            <p>{deck.subtitle}</p>
          </div>
          <div className="count-badge">{index + 1} <span>/ {cards.length}</span></div>
        </div>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="progress-label">
          <span>Card progress</span>
          <span>{progress}%</span>
        </div>

        <button
          className={`flashcard ${revealed ? "is-revealed" : ""}`}
          onClick={() => setRevealed((value) => !value)}
          aria-label={revealed ? "Show question" : "Reveal answer"}
        >
          <div className="card-topline">
            <span>{revealed ? "ANSWER" : "QUESTION"}</span>
            <span className="flip-symbol">↗</span>
          </div>
          <div className="card-content">
            <span className="card-number">CARD {String(index + 1).padStart(2, "0")}</span>
            <h3>{revealed ? card.a : card.q}</h3>
          </div>
          <div className="card-bottomline">
            <span>{revealed ? "Tap to see question" : "Think of your answer first"}</span>
            <span className="tap-label">TAP TO FLIP</span>
          </div>
        </button>

        <div className="keyboard-hint">Tip: try to answer out loud before revealing the answer.</div>

        <div className="card-controls">
          <button className="secondary-button" onClick={() => move(-1)}>
            <span>←</span> Previous
          </button>
          <button className="primary-button" onClick={() => setRevealed((value) => !value)}>
            {revealed ? "Show question" : "Reveal answer"}
          </button>
          <button className="secondary-button" onClick={() => move(1)}>
            Next <span>→</span>
          </button>
        </div>

        <div className="learning-row">
          <div className="learning-copy">
            <span className="learning-icon">✓</span>
            <div>
              <strong>Got it memorized?</strong>
              <small>{knownCount} of {cards.length} marked as known</small>
            </div>
          </div>
          <button className={`known-button ${known[key] ? "known-active" : ""}`} onClick={markKnown}>
            {known[key] ? "Marked ✓" : "I know this"}
          </button>
        </div>

        <div className="extra-controls">
          <button onClick={shuffleDeck}>⤨ Random card</button>
          <button onClick={() => {
            setKnown((previous) => {
              const next = { ...previous };
              cards.forEach((_, i) => delete next[`${section}-${i}`]);
              return next;
            });
            setIndex(0);
            setRevealed(false);
          }}>↻ Reset section progress</button>
        </div>
        {shuffled && <p className="shuffle-note">Random card selected. Your current card is {index + 1}.</p>}
      </section>

      <footer className="footer">
        <span>PATHFIT • REVIEW & RECALL</span>
        <span>Study at your own pace.</span>
      </footer>
    </main>
  );
}
