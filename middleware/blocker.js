export default function ({ store, redirect,route }) {
    
   
  // console.log(route)
  // console.log(store.state.isadmin)
    if(store.state.isadmin !="true"){
     // console.log("No")
    store.commit("storeisadmin",route.query.admin)
    }
  //  console.log(store.state.isadmin)
    if (!store.state.isadmin) {
      return redirect('/Blockerpage')
    }
  }