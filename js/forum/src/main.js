import { override } from 'flarum/extend';
import app from 'flarum/app';
import Search from 'flarum/components/Search';

app.initializers.add('pingxx-search', () => {
    console.log("aaaaa")
    override(Search.prototype, 'sourceItems', function(original) {
        return original().remove('users');
    });
});
