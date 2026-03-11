import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';

//AI:N luoma 

const seed = async () => {
  const db = await open({
    filename: path.join(process.cwd(), 'database.db'),
    driver: sqlite3.Database,
  });

  await db.exec(`
    INSERT INTO words (word, translation, example_sentence, categories) VALUES
    ('Pen','Qalin','Qalin gaduud ayaan heystaa','Noun'),
    ('Book','Buug','Kani waa buugeyga','Noun'),
    ('Walk','Socod','Waxaan u socdaa suuqa','Verb'),
    ('Drink','Cab','Cabitaankeyga ayaad cabtay','Verb'),
    ('Beautiful','Qurux','Gabadhaan aad ayey u qurxoontahay','Adjective'),
    ('Rich','Taajir','Ninkaan waa taajir','Adjective'),
    ('Nurse','Kalkaaliso','Kalkaalisooyin ayaa ka shaqeeya isbitaalka','Profession'),
    ('Engineer','Injineer','Iskoolka waxaa laga bartaa injineernimada','Profession'),
    ('Earth','Dhulka','Bani adan waxay ku noolyihiin dhulka','Celestial'),
    ('Sun','Qorrax','Qooraxda way ifeysaa maanta','Celestial'),
    ('Rice','Bariis','Waxaan sameeyay bariis iskukaris','Food'),
    ('Apple','Tufaax',NULL,'Food'),
    ('Head','Madax','Madaxa ayaa i xanuunaayo','Body parts'),
    ('Leg','Lug',NULL,'Body parts'),
    ('Hello','Salaam','Waan ku salaamay','Greetings'),
    ('Goodbye','Nabadgelyo',NULL,'Greetings');
  `);

  console.log('Words seeded successfully!');
  await db.close();
};

seed();