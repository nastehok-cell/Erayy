import express from 'express'
import { getWord, getCategories } from '../controllers/wordControllers.js'


const WordRouter = express.Router()
/**
 * @api {get} /Categories hakee kaikki kaegoriat
 * @apiName GetCategories
 * @apiGroup Word
 * 
 * @apisuccess {string[]} Kaikki kategoriat rivissä
 * @apiSuccess {curl}:
 * http://localhost:8000/api/word/categories
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * ["Noun","Verb","Adjective"]
 */
WordRouter.get('/Categories', getCategories)

/**
 * @api {get} / Hakee Kaikki sanat
 * @apiName GetWord
 * @apiGroup Word
 * 
 * @apiSuccess {Number} id word ID
 * @apiSuccess {string} sana word taulussa
 * @apiSuccess {string} translation käännös
 * @apiSuccess {string} categories Kategoria
 * @apiSuccess {string} example_sentence esimerkki lause
 * 
 * @apiSuccess {curl}:
 * http://localhost:8000/api/word/categories
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *  "id": 14,
 *  "word": "Leg",
 *  "translation": "Lug",
 *  "example_sentence": NULL,
 *  "categories": "body parts"
 * }
 */
WordRouter.get('/', getWord)

export { WordRouter }