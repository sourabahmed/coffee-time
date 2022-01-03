import React from 'react';

const AnyQuestion = () => {
    return (
        <div class='container-fluid'>
            <h1>Any Question</h1>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How to make a latte/cappuccino etc?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">If you’re bored of your regular morning cup of coffee, why not try mixing it up? There are lots of different types of coffees to try, from espressos to iced coffee – check out our list of <code>15 types of coffee to try before you die,</code> and see if anything takes your fancy.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    What is fair trade coffee?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Fair trade coffee is coffee that has been produced by a cooperative of farmers, importers, exporters and distributors that follow the standards set out by the FairTrade organisation. The FairTrade stamp on coffee is a certificate that guarantees the cooperative involved in the production of the coffee adhered to it’s standards, which include: set wages for farmers; environmentally sustainable practices; safe working conditions; exclusion of child labour; and agro-ecological practices, including reducing the use of chemical fertiliser and protecting forests.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Which has more caffeine – coffee or tea?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">There is significantly less caffeine in the average cup of tea than there is in coffee. Before tea has been prepared and brewed, its dry form does contain more caffeine, but once brewed it’s caffeine content drops. We also use less tea to make a cup than we do coffee. 1 cup (8oz) of coffee contains around 94mg of caffeine, whereas an 8oz cup of tea only contains 26mg of caffeine.</div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default AnyQuestion;