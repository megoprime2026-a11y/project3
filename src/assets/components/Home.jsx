
import  cake from '../components/img/cake.png';
import  cakef from '../components/img/cakef.png';
import cakechola from '../components/img/cakechola.png';
import redcake from '../components/img/redcake.png';
import truffles from '../components/img/truffles.png';
import ekler from '../components/img/ekler.png';
import mak from '../components/img/cc.png';
import cop from '../components/img/cop.png';
import cor from '../components/img/ttn.png';
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeicons/primeicons.css';
import { useState, useEffect, useRef, useCallback } from "react";
export default function Home() {
    const [visible, setVisible] = useState(false);
    const [Visible2, SetVisible2] = useState(false);
    const[Nn,SetNn]=useState("");
    const[Nx,SetNx]=useState("");
    const[m,SetM]=useState("");
    const[m1,SetM1]=useState("");
    const [num, setNum] = useState(1);
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1);
    const [revealedIds, setRevealedIds] = useState(() => new Set());
    const observerRef = useRef(null);
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.dataset.revealId;
                        setRevealedIds((prev) => {
                            if (prev.has(id)) return prev;
                            const next = new Set(prev);
                            next.add(id);
                            return next;
                        });
                        observerRef.current.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
 
        return () => observerRef.current && observerRef.current.disconnect();
    }, []);
    const registerReveal = useCallback((id) => (node) => {
        if (node && observerRef.current) {
            node.dataset.revealId = id;
            observerRef.current.observe(node);
        }
    }, []);
 
  
    const revealClass = (id, base = '') =>
        `${base} ${revealedIds.has(id) ? 'revealed' : ''}`.trim();
    
    
return (
     <>
    <section className="c1">
    <div className="back">
        <header></header>
        <div className={revealClass('c1-text', 'c1-text')} ref={registerReveal('c1-text')}>
            <ul>
                <li><h1>فنون الحلويات</h1></li>
                <li><p>حلويات تُذكّرك
                بأجمل اللحظات</p></li>
                <li><h5>نصنع الحلويات بشغف واحترافية، بأجود المكونات الطبيعية ووصفات أصيلة</h5></li>
                <li>
                <span>
                    <a href='#c9'><button className="btn">تواصل معنا <i className="pi pi-whatsapp"></i></button></a>
                    <a href='#c3'><button className="btn1">استكشاف القائمه<i className="pi pi-star"></i></button></a>
            
                </span>
            </li>
            </ul>
        </div>
    </div>
    </section>
    <section className="c2">
        <div className={revealClass('c2-text', 'c2-text')} ref={registerReveal('c2-text')}>
            <h5>قصتنا</h5>
            <h1>فنون الحلويات منذ ٢٠١٥</h1>
            <p>بدأت رحلتنا بشغف بسيط نحو صنع حلويات استثنائية اليوم، نفخر بتقديم تجربة فريدة تجمع بين الأصالة الفرنسية والنكهات المحلية المفضلة</p>
            <p>نستخدم فقط أجود المكونات الطبيعية: زبدة فرنسية أصلية، شوكولاتة بلجيكية فاخرة، وفواكه طازجة يومياً كل قطعة نصنعها هي تحفة فنية</p>
            <span><ul>
                <li>٩</li>
                <li>سنوات خبرة</li>
                
            </ul>
            <ul>
                <li>٢٥+</li>
                <li>نوع حلوى</li>
            </ul>
            <ul>
                <li>٩٠٠٠+</li>
                <li>عميل سعيد</li>
            </ul></span>
        </div>
        <div className={revealClass('c2-img', 'c2-img')} ref={registerReveal('c2-img')}><span> <ul>
                <li>٪١٠٠</li>
                <li>مكونات طبيعية</li>
            </ul></span></div>
        
    </section>
    <section id='c3' className="c3">
        <header>
            <h1>قائمتنا</h1>
            <h5>اكتشف أحدث الحلويات المميزة</h5>
        </header>
        <div className="c3-text">
            <ul>
                <li className={revealClass('c3-1')} ref={registerReveal('c3-1')}><ul>
                    <li className='l1'><i className="pi pi-star-fill"></i></li>
                    <li className='ll'>كيك الشوكولاتة الفاخر</li>
                    <li>طبقات غنية من الشوكولاتة البلجيكية مع توت طازج</li>
                    <li className='ll'>١٢٠ ر.س</li>
                </ul></li>
                <li className={revealClass('c3-2')} ref={registerReveal('c3-2')}><ul>
                    <li className='l1'><i className="pi pi-star-fill"></i></li>
                    <li className='ll'>ماكرون الفرنسي</li>
                    <li>مجموعة مختارة من النكهات الأصلية الفرنسية</li>
                    <li className='ll'>٨ ر.س / قطعة</li>
                </ul></li>
            </ul>
            <ul>
                <li className={revealClass('c3-3')} ref={registerReveal('c3-3')}><ul>
                        <li className='l1'><i className="pi pi-star-fill"></i></li>
                        <li className='ll'>كرواسان الزبدة</li>
                        <li>معجنات فرنسية أصيلة من زبدة فرنسية نقية</li>
                        <li className='ll'>١٥ ر.س</li>
                    </ul>
                </li>
                <li className={revealClass('c3-4')} ref={registerReveal('c3-4')}>
                    <ul>
                        <li className='l1'><i className="pi pi-star-fill"></i></li>
                        <li className='ll'>تارت الفواكه الموسمية</li>
                        <li>تارت طازج بكريمة الفانيليا والفواكه الموسمية</li>
                        <li className='ll'>٤٥ ر.س</li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
    <section className="c4">
        <ul className={revealClass('c4-list')} ref={registerReveal('c4-list')}>
            <li className='tit'>قائمة الحلويات</li>
            <li className='ti'>قائمتنا الكاملة</li>
            <li className='t'>مجموعة مختارة من أفخر الحلويات، صُنعت بشغف من أجود المكونات الطبيعية</li>
            <li className='bot'>
                <span><a href='#c8'><button className='btnn2'>المعجانات الفرنسيه</button></a><a href='#c7'><button className='btnn3' >التورات و الحلويات البارده</button></a></span>
                <span><a href='#c6'><button className='btnn'>الكيك الفاخر</button></a><a href='#c5'><button className='btnn1'>ماكرون وشيكولاته</button></a></span>
            
            </li>
        </ul>
    </section>
    <section id='c5' className="c5">
        <header><h1 id='h1'>ماكرون وشيكولاته</h1></header>
        <div>
            <ul>
                <li>
                    <div className={revealClass('caard-1', 'caard')} ref={registerReveal('caard-1')}>
                        <img src={ekler} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>18</span>$</span>
                        <span id='name'> إكلير</span>
                        </p>
                        <h6 className='pp'>
معجنات الشو محشوة بكريمة الفانيليا ومغطاة بالشوكولاتة                         </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum(num + 1)}>+</button>
                        <p id='num'>{num}</p>
                        <button id='neg'onClick={() =>{if (num > 1) {
                            setNum(num - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
                <li>
                    <div className={revealClass('caard-2', 'caard')} ref={registerReveal('caard-2')}>
                        <img src={truffles} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>140</span>$</span>
                        <span id='name'>ترافيل الشيكولاته الفاخر</span>
                        </p>
                        <h6 className='pp'>
علبة ١٢ قطعة من الشوكولاتة البلجيكية المحشوة
                        </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum1(num1 + 1)}>+</button>
                        <p id='num'>{num1}</p>
                        <button id='neg'onClick={() =>{if (num1 > 1) {
                            setNum1(num1 - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
                <li>
                    <div className={revealClass('caard-3', 'caard')} ref={registerReveal('caard-3')}>
                        <img src={mak} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>8</span>$</span>
                        <span id='name'> الكيك الفاخر</span>
                        </p>
                        <h6 className='pp'>
                        تشكيلة نكهات: فانيليا، فستق، توت، شوكولاتة، ورد
                        </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum2(num2 + 1)}>+</button>
                        <p id='num'>{num2}</p>
                        <button id='neg'onClick={() =>{if (num2 > 1) {
                            setNum2(num2 - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
            </ul>
            
        </div>
    </section>
    <section id='c6' className="c6">
        <header><h1 id='h1'> الكيك الفاخر</h1></header>
        <div>
            <ul>
                <li>
                    <div className={revealClass('caard-4', 'caard')} ref={registerReveal('caard-4')}>
                        <img src={cake} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>95</span>$</span>
                        <span id='name'> تشيز كيك الفراولة</span>
                        </p>
                        <h6 className='pp'>
تشيز كيك كريمي بقاعدة البسكويت وفراولة موسمية
</h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum(num + 1)}>+</button>
                        <p id='num'>{num}</p>
                        <button id='neg'onClick={() =>{if (num > 1) {
                            setNum(num - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
                <li>
                    <div className={revealClass('caard-5', 'caard')} ref={registerReveal('caard-5')}>
                        <img src={redcake} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>120</span>$</span>
                        <span id='name'>ريد فيلفت
</span>
                        </p>
                        <h6 className='pp'>
كيك ريد فيلفت الكلاسيكي مع كريمة الجبن الطازجة
 
 
                        </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum1(num1 + 1)}>+</button>
                        <p id='num'>{num1}</p>
                        <button id='neg'onClick={() =>{if (num1 > 1) {
                            setNum1(num1 - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
                <li>
                    <div className={revealClass('caard-6', 'caard')} ref={registerReveal('caard-6')}>
                        <img src={cakechola} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>140</span>$</span>
                        <span id='name'>كيك الشوكولاتة البلجيكية
</span>
                        </p>
                        <h6 className='pp'>
طبقات شوكولاتة داكنة مع كريمة الغاناش وتوت طازج
 
 
                        </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum2(num2 + 1)}>+</button>
                        <p id='num'>{num2}</p>
                        <button id='neg'onClick={() =>{if (num2 > 1) {
                            setNum2(num2 - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
            </ul>
            
        </div>
    
    </section>
    <section id='c7' className="c7">
        <header><h1 id='h1'>التورات والحلويات البارده</h1></header>
        <div>
            <ul>
                <li>
                    <div className={revealClass('caard-7', 'caard')} ref={registerReveal('caard-7')}>
                        <img src={cake} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>40</span>$</span>
                        <span id='name'> تشيز كيك التوت
</span>
                        </p>
                        <h6 className='pp'>
تشيز كيك بارد بصلصة التوت البري </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum(num + 1)}>+</button>
                        <p id='num'>{num}</p>
                        <button id='neg'onClick={() =>{if (num > 1) {
                            setNum(num - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
                <li>
                    <div className={revealClass('caard-8', 'caard')} ref={registerReveal('caard-8')}>
                        <img src={cop} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>35</span>$</span>
                        <span id='name'>تيراميسو
</span>
                        </p>
                        <h6 className='pp'>
تيراميسو إيطالي أصيل بكريمة الماسكاربوني والقهوة
 
 
                        </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum1(num1 + 1)}>+</button>
                        <p id='num'>{num1}</p>
                        <button id='neg'onClick={() =>{if (num1 > 1) {
                            setNum1(num1 - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
                <li>
                    <div className={revealClass('caard-9', 'caard')} ref={registerReveal('caard-9')}>
                        <img src={cakef} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>8</span>$</span>
                        <span id='name'>تورت الفواكه الموسمية
</span>
                        </p>
                        <h6 className='pp'>
تارت طازج بكريمة الفانيليا والفواكه الموسمية
                        </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum2(num2 + 1)}>+</button>
                        <p id='num'>{num2}</p>
                        <button id='neg'onClick={() =>{if (num2 > 1) {
                            setNum2(num2 - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
            </ul>
            
        </div>
    </section>
    <section id='c8' className="c8">
        <header><h1 id='h1'>المعجنات الفرنسيه</h1></header>
        <div>
            <ul>
                <li>
                    <div className={revealClass('caard-10', 'caard')} ref={registerReveal('caard-10')}>
                        <img src={cor} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>20</span>$</span>
                        <span id='name'> كرواسان اللوز
</span>
                        </p>
                        <h6 className='pp'>
كرواسان محشو بكريمة اللوز ومزين بشرائح اللوز </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum(num + 1)}>+</button>
                        <p id='num'>{num}</p>
                        <button id='neg'onClick={() =>{if (num > 1) {
                            setNum(num - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
                <li>
                    <div className={revealClass('caard-11', 'caard')} ref={registerReveal('caard-11')}>
                        <img src={cor} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>18</span>$</span>
                        <span id='name'>بان أو شوكولا
</span>
                        </p>
                        <h6 className='pp'>
معجنات محشوة بأصابع الشوكولاتة الداكنة                        </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum1(num1 + 1)}>+</button>
                        <p id='num'>{num1}</p>
                        <button id='neg'onClick={() =>{if (num1 > 1) {
                            setNum1(num1 - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
                <li>
                    <div className={revealClass('caard-12', 'caard')} ref={registerReveal('caard-12')}>
                        <img src={cor} className='immg' alt="" />
                        <p className='title'>
                        <span id='m'><span>15</span>$</span>
                        <span id='name'>كرواسان الزبدة</span>
                        </p>
                        <h6 className='pp'>
كرواسان فرنسي أصيل بطبقات هشة من الزبدة
 
 
                        </h6>
                        <span className='butn'>
                        <Button className='bbtn' label="اطلب" onClick={() => setVisible(true)} />
                        <div className='cal'>
                        <button id='pos'onClick={() => setNum2(num2 + 1)}>+</button>
                        <p id='num'>{num2}</p>
                        <button id='neg'onClick={() =>{if (num2 > 1) {
                            setNum2(num2 - 1)
                        }
                        }}>-</button>
                        </div>
                        </span>
                        <div className="card flex justify-content-center">
            
            <Dialog className='pot'  visible={visible} onHide={() => setVisible(false)}>
                <ul>
                <li className='t1'>
                    <h1>تاكيد الطلب</h1>
                    </li>
                    <li className='INPUT'><label htmlFor="nn">الاسم</label>
                    <input type="text" id='nn'value={Nn} onChange={(e)=>{SetNn(e.target.value); SetM("");}} placeholder='......الاسم' />
                    <h6>{m}</h6>
                    </li>
                    <li className='INPUT'>
                    <label htmlFor="nx">الرقم</label>
                    <input type="text" id='nx' value={Nx} onChange={(e)=>{SetNx(e.target.value);SetM1("");}} placeholder='01XXXXXXXXX' />
                    <h6>{m1}</h6>
                </li>
                <li className='inbut'><a href=''onClick={(e) => {
    if (Nn === "" || Nx === "") {
      e.preventDefault();
 
      if (Nn === "") {
        SetM("الرجاء ادخال الاسم");
      }
 
      if (Nx === "") {
        SetM1("الرجاء ادخال الرقم");
      }
    }
  }}><button id='but' >ارسال الطلب</button></a>
                <button id='but1'onClick={() => setVisible(false)} autoFocus >الغاء</button></li>
                
            </ul>
            </Dialog>
        </div>
                    </div>  
                </li>
            </ul>
            
        </div>
    </section>
    <section id='c9' className='c9'>
        <div className={revealClass('c9-d1', 'c9-d1')} ref={registerReveal('c9-d1')}>
        <ul>
            <li className='l1l'>تواصل معنا</li>
            <li className='l2l'>نحن هنا لخدمتك</li>
            <li className='l3l'>نسعد بتواصلكم معنا لأي استفسار أو طلب خاص نقدم خدمة التوصيل داخل المدينة ونستقبل طلبات المناسبات والأعراس
 
</li>
            <li className='end-list'>
               
 
                <span className='l1'><i className="pi  pi-phone"></i></span> 
                <span>
                    <h4 className='listTi'>اتصل بنا</h4>
                    <h4>٠٥٠٠٠٠٠٠٠٠</h4>
                </span>
            </li>
            <li className='end-list'>
                <span className='l1'><i className="pi  pi-map-marker"></i></span> 
                <span>
                    <h4 className='listTi'>الموقع</h4>
                    <h4>...............شارع</h4>
                </span>
            </li>
            <li className='end-list'>
                <span className='l1'><i className="pi  pi-clock"></i></span>
                <span>
                    <h4 className='listTi'>أوقات العمل</h4>
                    <h4>السبت - الخميس: ٨ صباحاً - ١١ مساءً</h4>
                </span>
            </li>
            <li className='end-list'>
                <span className='l1'><i className="pi  pi-instagram"></i></span>
                <span>
                    <h4 className='listTi'>تابعنا</h4>
                    <h4>@refined_taste_sweets</h4>
                </span>
            </li>
        </ul>
    </div>
        <div className={revealClass('c9-d2', 'c9-d2')} ref={registerReveal('c9-d2')}>
        <div>
            <ul>
                <li className='ll4l'>اطلب الآن عبر الواتساب</li>
                <li className='l4l'>أرسل لنا طلبك مباشرة وسنقوم بالرد في أقرب وقت ممكن</li>
                <li><a href=''><button className='btn-endd'>تواصل عبر الواتساب <i className="pi pi-whatsapp"></i></button></a></li>
                <li className='l5l'><h4>نستقبل طلبات المناسبات والأعراس والولائم</h4></li>
            </ul>
        </div>
    </div>
    
    </section>
    
    </>
);
}