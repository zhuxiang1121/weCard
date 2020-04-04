Page(
  {
    data :{
      num:"0"
    },
    handleinput(e){
      //console.log(e.detail.value)
      this.setData(
        {num:e.detail.value}
      )
    }
  }
)