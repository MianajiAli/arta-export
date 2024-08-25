const categories = {
    "صنایع دستی": ["چاقو", "ظروف مسی"],
    "مراقبتی بهداشتی": ["شامپو", "ماسک مو"],
    "تجهیرات پزشکی و ارتوپدی": [],
    "لوازم آشپزخانه": ["کتری قوری", "فلاکس"],
    "تجهیرات برقی": ["سیم و برق"],
};

export default function Page() {
    return (
        <div className="  flex justify-center items-start  border border-text1 p-5 rounded-md">
            <ul dir="rtl">
                {Object.entries(categories).map(([category, items]) => (
                    <li className="text-text1" key={category}>
                        {category}
                        {items.length > 0 && (
                            <ul>
                                {items.map(item => (
                                    <li className="text-text2" key={item}>- {item}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
