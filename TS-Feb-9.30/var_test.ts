function varTest()
{
    var x = "hi";

    if(true)
    {
        var x = "hello";
        console.log(x);
    }

    console.log(x);
}

varTest();