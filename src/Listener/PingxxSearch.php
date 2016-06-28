<?php
/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Pingxx\Search\Listener;
;

use Flarum\Event\ConfigureFormatter;
use Illuminate\Contracts\Events\Dispatcher;

class PingxxSearch
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureDiscussionSearch::class, [$this, 'usePingxxSearch']);
    }

    /**
     * @param ConfigureFormatter $event
     */
    public function usePingxxSearch(ConfigureDiscussionSearch $event)
    {
        $query = $event->search->getQuery();

        echo "正在使用Pingxx搜索引擎中。。。关键字:" + $query;
    }
}