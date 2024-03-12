import './Homepage.css'
import FoodListCategorywise from "./FoodListCategorywise";
import ItemComponent from "./ItemsComponent";
import { Children, forwardRef, useEffect, useImperativeHandle, useState, useLayoutEffect, useRef } from "react";

const FoodList = forwardRef(({ foodItems, subtractOne, addOne, cart, HeaderRef, menuref }, ref) => {

    const categories = foodItems;
    // for scrolling to clicked category--->>>

    const scrollToCategory = (CategoryId) => {
        setisScrolling(false);
        window.removeEventListener('scroll',scrollfuncRef.current);
        const CategoryFoodListId = CategoryId + 'list';
        const category = document.getElementById(CategoryFoodListId);
        // console.log(CategoryId);
        // console.log(category);
        if (category) {
            const height = category.getBoundingClientRect().top;
            const navbar_height = document.getElementById('head').getBoundingClientRect().bottom;

            document.documentElement.scrollBy({
                top: height - navbar_height,
                left: 0,
                behavior: 'smooth'
            });
            setTimeout(() => {                              // settimeout used to give time to scroll animation
                setisScrolling(true);
                window.addEventListener('scroll',scrollfuncRef.current);
            }, 1000);

        }
        const id = CategoryId + 'btn';
        document.getElementsByClassName('CategoryList')[0].childNodes.forEach((child) => {
            let classList_string = child.classList.value;
            if (classList_string.includes('activebtn-categorylist')) child.classList.remove('activebtn-categorylist')
        })
        document.getElementById(id).classList.add('activebtn-categorylist');
    }

    useImperativeHandle(ref, () => ({
        scrollToCategory,
      
    }));


    // implementation of back-scrolling ----->>>
    /*use for re-rendering  so that height of head is updated and on changing dimension gives
     smooth experience in foodlist sticky part*/
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    //getting height of header and setting it to css variable--->
    let HeightOfHeader;
    if (HeaderRef.current) {
        HeightOfHeader = HeaderRef.current.getBoundingClientRect().bottom;
        document.documentElement.style.setProperty('--stickHeight', `${HeightOfHeader}px`);
    }
    //for onload first category active btn;
    // const sandwichTitle = document.getElementById('Sandwich');
    // const sandwichBtn = document.getElementById('Sandwichbtn');
    // if(sandwichTitle){
    // const heightOfSandwichTitle = sandwichTitle.getBoundingClientRect().top;
    // if(heightOfSandwichTitle <= HeightOfHeader+2 && heightOfSandwichTitle>= HeightOfHeader+2 ) sandwichBtn.classList.add('activebtn-categorylist');
    // }


    //scroll event on foodlist component
    const [isScrolling, setisScrolling] = useState(true);
    const scrollfuncRef = useRef(null);
    useEffect(() => {
        scrollfuncRef.current = () => {
            categories.map(category => {
                if(isScrolling) {
                let title = category[0].category;
                // console.log(document.getElementById(title));
                let titleElement = document.getElementById(title);
                let titleBtnId = title + 'btn';
                let titleBtn = document.getElementById(titleBtnId);
                // console.log(titleElement);
                if (titleElement) {
                    let heightOfTitleFromTop = titleElement.getBoundingClientRect().top;
                    // console.log( 'height of ',title,': ',heightOfTitleFromTop)
                    let heightOfHeader = document.getElementById('head').getBoundingClientRect().bottom;
                    console.log(heightOfHeader);
                    if (heightOfTitleFromTop <= heightOfHeader) {
                        // console.log(title,'  stick');
                        titleElement.classList.add('Category-name-active');
                        titleBtn.classList.add('activebtn-categorylist');
                    }
                    else {
                        if (titleElement.classList.value.includes('Category-name-active'))
                            titleElement.classList.remove('Category-name-active');

                    }
                    const heightOfTitle = titleElement.getBoundingClientRect().height;
                    if (heightOfTitleFromTop >= heightOfHeader && heightOfTitleFromTop <= heightOfHeader + heightOfTitle) { console.log(titleBtn); titleBtn.classList.add('activebtn-categorylist'); }
                    else {
                        if (titleBtn.classList.value.includes('activebtn-categorylist')) titleBtn.classList.remove('activebtn-categorylist');
                    }
                }
            }
            })

        }
        window.addEventListener('scroll', scrollfuncRef.current);
        return () => {
            window.removeEventListener('scroll', scrollfuncRef.current);
        }
    },[categories,isScrolling]
    )


    return (
        <div className="Menu" ref={menuref} >
            {
                // <ItemComponent FoodList={FoodList}/>
                categories.map((category) => (
                    <FoodListCategorywise Foodlist={category} key={categories.indexOf(category)} subtractOne={subtractOne} addOne={addOne} ItemInfo={'Item-info'} ItemName={'Item-name'} ItemPriceInfo={'Item-info-price'} AddBtn={'Add-item'} ImgClass={'Item-img'} MainClass={'Fooditem'} cart={cart} />
                ))}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );

})
export default FoodList;
