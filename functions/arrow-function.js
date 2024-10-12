const getBrand = brand => ({
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`
    }
    )
    const add = (a, b) => a + b;
    const calculate = (a, b, sign) => {
        switch(sign) {
            case '+':
                return a+b;
                break;
            case '-':
                return a-b;
                break;
            default :
                //error
        }
    }
    const brand = getBrand("Amigoscode")
    console.log(JSON.stringify(brand, null, 1))   