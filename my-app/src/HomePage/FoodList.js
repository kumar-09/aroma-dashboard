import './Homepage.css'
import FoodListCategorywise from "./FoodListCategorywise";
import { forwardRef, useEffect, useImperativeHandle, useState, useLayoutEffect, useRef } from "react";


const FoodList = forwardRef(({MasterData,subtractOne, addOne, cart, NavbarRef, menuref }, ref) => {

   
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
 
    let HeightOfHeader;
    //getting height of header and setting it to css variable--->
    // useEffect(()=>{  
       
    //     // console.log(HeightOfHeader)
    // }},[])

    useLayoutEffect(() => {
        if (NavbarRef.current) {
            HeightOfHeader = document.getElementById('head').getBoundingClientRect().height;
            document.documentElement.style.setProperty('--stickHeight', `${HeightOfHeader}px`);}
            console.log(HeightOfHeader)
        function updateSize() {
            if (NavbarRef.current) {
                HeightOfHeader = NavbarRef.current.getBoundingClientRect().bottom;
                document.documentElement.style.setProperty('--stickHeight', `${HeightOfHeader}px`);
                console.log(HeightOfHeader);
            }
        }
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
},[NavbarRef.current]);

    const [isScrolling, setisScrolling] = useState(true);
    const scrollfuncRef = useRef(null);
   
    useEffect(() => {                 

        scrollfuncRef.current = () => {
            MasterData.map(category => {
                if(isScrolling) {
                let title = category[0];
                let titleElement = document.getElementById(title);
                let titleBtnId = title + 'btn';
                let titleBtn = document.getElementById(titleBtnId);

                if (titleElement && titleBtn) {
                    let heightOfHeader = document.getElementById('head').getBoundingClientRect().bottom;
                
                    const scrollPosition = window.scrollY+heightOfHeader+1 ;
                    const titlePosition = titleElement.offsetTop;
                    const nextTitlePosition =
                      MasterData.indexOf(category) < MasterData.length - 1
                        ? document.getElementById(`${MasterData[MasterData.indexOf(category) + 1][0]}`).offsetTop
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
        window.onload= scrollfuncRef.current();
           
        window.addEventListener('scroll', scrollfuncRef.current);
      
        return () => {
            window.removeEventListener('scroll', scrollfuncRef.current);
        }
    },[MasterData,isScrolling]
    )
    
    return (
        <div className="Menu" ref={menuref} >
            
                 <img className = "footer-img-dif" src="https://dukaan.b-cdn.net/600x600/webp/4420984/58dfd4d9-6975-4e74-9027-758740ffcbf6/image-78227dda-6d27-4026-9733-56dd23d462bc.png" alt="Aroma Delight Dhaba" />
            
              {  MasterData.map((category) => (
                    <FoodListCategorywise Foodlist={category} key={MasterData.indexOf(category)} subtractOne={subtractOne} addOne={addOne} ItemInfo={'Item-info'} ItemName={'Item-name'} ItemPriceInfo={'Item-info-price'} AddBtn={'Add-item'} ImgClass={'Item-img'} MainClass={'Fooditem'} cart={cart} />
                ))}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    {/* <Link ><div className='catgBtn' ><img src={catgimg} style={{width:20,display:'inline-block',color: 'white'} } ></img><div className='catg-btn-name'>categories</div></div></Link> */}
        </div>
    );

})
export default FoodList;
