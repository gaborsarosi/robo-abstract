# robo-abstract

[inspire HEP](https://inspirehep.net) is a search engine for high energy physics papers, with lots of metadata, like the titles and abstracts of a paper. This project is about developing a game, called [Dr. AI](http://dr-ai.42web.io), where you need to guess if you're given a true abstract from [inspire HEP](https://inspirehep.net) or one written by [OpenAI](http://openai.com)'s GPT-3.

The jupyter directory contains two notebooks: [inspire_scrape.ipynb](https://github.com/gaborsarosi/robo-abstract/blob/main/Jupyter/inspire_scrape.ipynb) scrapes metadata from inspire HEP, while [GPT_3_fine_tune.ipynb](https://github.com/gaborsarosi/robo-abstract/blob/main/Jupyter/GPT_3_fine_tune.ipynb) uses OpenAI's API to fine tune GPT-3 for HEP title-abstracts pairs, and then generates new abstracts.

The web directory contains the javascript & html for the webpage [Dr. AI](http://dr-ai.42web.io), as well as data.json containing 685 game entries generated by the notebook [GPT_3_fine_tune.ipynb](https://github.com/gaborsarosi/robo-abstract/blob/main/Jupyter/GPT_3_fine_tune.ipynb).
