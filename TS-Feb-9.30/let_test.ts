function letTest()
{
  let y = "hi";

    if(true)
    {
        let y = "hello";

        console.log(y);
    }

    console.log(y);
}

letTest();