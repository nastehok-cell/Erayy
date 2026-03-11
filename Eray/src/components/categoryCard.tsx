import food from '../assets/food.jpg';
import greeting from '../assets/greeting.jpg';
import pronouns from '../assets/pronouns.jpg';
import verbs from '../assets/verbs.webp';
import body from '../assets/body.jpg';
import nouns from '../assets/nouns.jpg'

//Kategoria-komponentti, joka näyttää kategoria-kortit
const CategoryCard = () => {
    return (
        <section>
            <h1>Categories</h1>
            <div className="grid">
                <div className="categoryCard">
                    <img className="cardPic" src={food} alt="food" />
                    <h2>Food</h2>
                </div>

                <div className="categoryCard">
                    <img className="cardPic" src={greeting} alt="greeting" />
                    <h2>Greetings</h2>
                </div>

                <div className="categoryCard">
                    <img className="cardPic" src={pronouns} alt="pronouns" />
                    <h2>Pronouns</h2>
                </div>
                <div className="categoryCard">
                    <img className="cardPic" src={nouns} alt="nouns" />
                    <h2>Nouns</h2>
                </div>
                <div className="categoryCard">
                    <img className="cardPic" src={verbs} alt="verbs" />
                    <h2>Verbs</h2>
                </div>

                <div className="categoryCard">
                    <img className="cardPic" src={body} alt="body" />
                    <h2>Body parts</h2>
                </div>
            </div>
        </section>
    )
}

export default CategoryCard;