module.exports = {
    beforeEach: browser => {
        browser.url('http://alpha.yoodlize.com')
    },
    after: browser => {
        browser.end()
    },
    'Automating Tests On Yoodlize 1': browser => {
    browser
        .pause(1000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Recreational Vehicles')
    
    'Automating Tests On Yoodlize 2' 
    browser.url('http://alpha.yoodlize.com')       
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .pause(1000) 
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Outdoor Gear')

    'Automating Tests On Yoodlize 3' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Electronics')

    'Automating Tests On Yoodlize 4' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Party & Wedding Equipment')

    'Automating Tests On Yoodlize 5' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Tools')

    'Automating Tests On Yoodlize 6' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Clothing')

    'Automating Tests On Yoodlize 7' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Home & Kitchen')

    'Automating Tests On Yoodlize 8' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Toys & Games')

    'Automating Tests On Yoodlize 9' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Lawn & Garden')

    'Automating Tests On Yoodlize 10' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Sporting Goods')

    'Automating Tests On Yoodlize 11' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: DVDs & Video Games')

    'Automating Tests On Yoodlize 12' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Venues')

    'Automating Tests On Yoodlize 13' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Local Experts')

    'Automating Tests On Yoodlize 14' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Guided Experiences')

    'Automating Tests On Yoodlize 15' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Music')

    'Automating Tests On Yoodlize 16' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[16]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Business Equipment')

    'Automating Tests On Yoodlize 17' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[17]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Misc')
// Partition
    'Browse Categories' 
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[1]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Tools')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[2]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Outdoor Gear') 

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[3]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Electronics') 

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[4]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Party & Wedding') 

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[5]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Recreational Vehicles')
        
    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[6]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Clothing')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[7]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Home & Kitchen')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[8]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Toys & Games')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[9]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Lawn & Garden')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[10]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Sporting Goods')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[11]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: DVD & Video Games')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[12]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Venues')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[13]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Local Experts')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[14]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Guided Experiences')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[15]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Music')

    browser.url('http://alpha.yoodlize.com')        
    browser
        .pause(1000)        
        .useXpath()
        .click('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[16]')
        .pause(1000)
        .waitForElementVisible('//div[@class="sc-jKVCRD jSqgxr"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'category: Misc')
    }
}