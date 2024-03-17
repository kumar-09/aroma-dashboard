import './Homepage.css'
import FoodListCategorywise from "./FoodListCategorywise";
import catgimg from '../image/category-svgrepo-com (1).svg'
import ItemComponent from "./ItemsComponent";
import { Children, forwardRef, useEffect, useImperativeHandle, useState, useLayoutEffect, useRef } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';

const FoodList = forwardRef(({MasterData,subtractOne, addOne, cart, HeaderRef, menuref }, ref) => {

   
    // for scrolling to clicked category--->>>

    const scrollToCategory = (CategoryId) => {
        setisScrolling(false);
        window.removeEventListener('scroll',scrollfuncRef.current);
        const CategoryFoodListId = CategoryId + 'list';
        const category = document.getElementById(CategoryFoodListId);
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
    // for onload first category active btn;
    // const sandwichTitle = document.getElementById('Sandwich');
    // const sandwichBtn = document.getElementById('Sandwichbtn');
    // if(sandwichTitle){
    // const heightOfSandwichTitle = sandwichTitle.getBoundingClientRect().top;
    // if(heightOfSandwichTitle <= HeightOfHeader+2 && heightOfSandwichTitle>= HeightOfHeader+2 ) sandwichBtn.classList.add('activebtn-categorylist');
    // }

    const categories = MasterData;
    //scroll event on foodlist component
    const [isScrolling, setisScrolling] = useState(true);
    const scrollfuncRef = useRef(null);
    useEffect(() => {
        scrollfuncRef.current = () => {
            categories.map(category => {
                if(isScrolling) {
                let title = category[0];
                // console.log(document.getElementById(title));
                let titleElement = document.getElementById(title);
                let titleBtnId = title + 'btn';
                let titleBtn = document.getElementById(titleBtnId);
                // console.log(titleElement);
                if (titleElement) {
                    let heightOfHeader = document.getElementById('head').getBoundingClientRect().bottom;
                
                    const scrollPosition = window.scrollY+heightOfHeader+1 ;
                    const titlePosition = titleElement.offsetTop;
                    const nextTitlePosition =
                      categories.indexOf(category) < categories.length - 1
                        ? document.getElementById(`${categories[categories.indexOf(category) + 1][0]}`).offsetTop
                        : Number.MAX_SAFE_INTEGER;
                    if (scrollPosition >= titlePosition && scrollPosition < nextTitlePosition) {
                        titleBtn.classList.add('activebtn-categorylist');
                        titleElement.classList.add('Category-name-active');
                    }
                    else {
                        if (titleElement.classList.value.includes('Category-name-active'))
                        titleElement.classList.remove('Category-name-active');
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
    useEffect(()=>{window.addEventListener('load', scrollfuncRef.current)
                },[scrollfuncRef.current])
    


                    // if (heightOfTitleFromTop <= heightOfHeader) {
                    //     // console.log(title,'  stick');
                    //     titleElement.classList.add('Category-name-active');
                    //     titleBtn.classList.add('activebtn-categorylist');
                    // }
                    // else {
                    //     if (titleElement.classList.value.includes('Category-name-active'))
                    //         titleElement.classList.remove('Category-name-active');

                    // }
                    // const heightOfTitle = titleElement.getBoundingClientRect().height;
                    // console.log(category[0].category,'  header-',heightOfHeader,'titleheight: ',heightOfTitleFromTop, 'heightofheader+title', heightOfHeader+heightOfTitle)
                    // if (heightOfTitleFromTop >= heightOfHeader-3 && heightOfTitleFromTop <= heightOfHeader + heightOfTitle) { console.log(titleBtn); titleBtn.classList.add('activebtn-categorylist'); } // given a margin of 3 in heightfromtop as due to some padding and margin heightfrom top is different
                    // else {
                    //     if (titleBtn.classList.value.includes('activebtn-categorylist')) titleBtn.classList.remove('activebtn-categorylist');
                    // }


    return (
        <div className="Menu" ref={menuref} >
            
                 <img className = "footer-img-dif" src="https://dukaan.b-cdn.net/600x600/webp/4420984/58dfd4d9-6975-4e74-9027-758740ffcbf6/image-78227dda-6d27-4026-9733-56dd23d462bc.png" alt="Aroma Delight Dhaba" />
            
              {  MasterData.map((category) => (
                    <FoodListCategorywise Foodlist={category} key={categories.indexOf(category)} subtractOne={subtractOne} addOne={addOne} ItemInfo={'Item-info'} ItemName={'Item-name'} ItemPriceInfo={'Item-info-price'} AddBtn={'Add-item'} ImgClass={'Item-img'} MainClass={'Fooditem'} cart={cart} />
                ))}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    {/* <Link ><div className='catgBtn' ><img src={catgimg} style={{width:20,display:'inline-block',color: 'white'} } ></img><div className='catg-btn-name'>categories</div></div></Link> */}
        </div>
    );

})
export default FoodList;
