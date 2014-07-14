(function(ADB) {
    'use strict';

    var extend = ADB.core.extend;
    var PlayerDelegate = ADB.va.PlayerDelegate;

    extend(VideoPlayerDelegate, PlayerDelegate);

    function VideoPlayerDelegate(player, provider) {
        VideoPlayerDelegate.__super__.constructor.call(this);

        this._player = player;
        this._provider = provider;
    }

    VideoPlayerDelegate.prototype.getVideoInfo = function() {
        return this._player.getVideoInfo();
    };

    VideoPlayerDelegate.prototype.getAdBreakInfo = function() {
        return this._player.getAdBreakInfo();
    };

    VideoPlayerDelegate.prototype.getAdInfo = function() {
        return this._player.getAdInfo();
    };

    VideoPlayerDelegate.prototype.getChapterInfo = function() {
        return this._player.getChapterInfo();
    };

    VideoPlayerDelegate.prototype.getQoSInfo = function() {
        // This sample app does not support QoS-tracking workflows.
        return null;
    };

    VideoPlayerDelegate.prototype.onError = function(errorInfo) {
        console.log("VideoAnalytics error. Message: "+ errorInfo.message +
                    ". Details: " + errorInfo.details + ".")
    };

    VideoPlayerDelegate.prototype.onVideoUnloaded = function() {
        // The VideoHeartbeat engine is done with tracking this video playback session.
        // If we no longer need to track further playback from this player, we can now
        // safely destroy the VideoAnalyticsProvider and with it, the VideoHeartbeat instance.
        this._provider.destroy();
    };

    // Export symbols.
    window.VideoPlayerDelegate = VideoPlayerDelegate;
})(window.ADB);
