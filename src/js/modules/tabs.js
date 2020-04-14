const tabs = (containerTabsSelector, tabSelector, tabsContentSelector, activeSelector) => {
   const containerTabs = document.querySelector(containerTabsSelector),
         tabs = document.querySelectorAll(tabSelector),
         tabsContent = document.querySelectorAll(tabsContentSelector);
   
   function hideTabsContent() {
      tabsContent.forEach(item => {
         item.style.display = "none";
      });

      tabs.forEach(item => {
         item.classList.remove(activeSelector);
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].style.width = "110%";
      tabsContent[i].style.display = "block";
      tabs[i].classList.add(activeSelector);
   }

   containerTabs.addEventListener("click", (e) => {
      const target = e.target;
      
      if (target.classList.contains(tabSelector.replace(/\./, "")) || 
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {         
         
         tabs.forEach((item, i) => {
            if(target == item || target.parentNode == item) {
               hideTabsContent();
               showTabContent(i);
            }
         })
      }
   });

};

export default tabs;