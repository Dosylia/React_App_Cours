import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {

    return (
        <div className='lmj-categories'>
            <select 
            className='lmj-categories-select'
            id="categories" 
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}>
                <option value="">Toutes les catégories</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    );
}

export default Categories;