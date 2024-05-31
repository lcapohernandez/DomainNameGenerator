const pronouns = ['my', 'your', 'our'];
const adjectives = ['awesome', 'amazing', 'fantastic'];
const nouns = ['website', 'blog', 'store'];

const domainNames = [];

pronouns.forEach(pronoun => {
    adjectives.forEach(adjective => {
        nouns.forEach(noun => {
            domainNames.push(pronoun + adjective + noun + '.com');
        });
    });
});

console.log("Generated Domain Names:");
domainNames.forEach(domainName => {
    console.log(domainName);
});
