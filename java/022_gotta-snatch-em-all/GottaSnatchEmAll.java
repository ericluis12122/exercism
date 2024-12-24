import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Iterator;

class GottaSnatchEmAll {

    static Set<String> newCollection(List<String> cards) {
        return new HashSet<String>(cards);
    }

    static boolean addCard(String card, Set<String> collection) {
        return collection.add(card);
    }

    static boolean canTrade(Set<String> myCollection, Set<String> theirCollection) {
        Iterator<String> it = myCollection.iterator();
        while(it.hasNext()) {
          String i = it.next();
          if(theirCollection.remove(i)) {
            it.remove();
          }
        }
        return !(myCollection.isEmpty() || theirCollection.isEmpty());
    }

    static Set<String> commonCards(List<Set<String>> collections) {
        Set<String> result = new HashSet<String>();
        boolean commonCard = true;
        for(String card : collections.get(0)) {
            for(int i = 1; i < collections.size(); i++)
                if(!collections.get(i).contains(card)) {
                    commonCard = false;
                    break;
                }
            if(commonCard)
                result.add(card);
            else
                commonCard = true;
        }
        return result;
    }

    static Set<String> allCards(List<Set<String>> collections) {
        Set<String> result = new HashSet<String>();
        for(Set<String> collection : collections)
            for(String card : collection)
                result.add(card);
        return result;
    }
}
